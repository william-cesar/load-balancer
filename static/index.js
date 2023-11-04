const button = document.getElementById('request-data');
const textData = document.getElementById('data');

const wait = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const setRightToLeftClass = (elementId) => {
  const el = document.getElementById(elementId);
  el.classList.add('active', 'to-left');
}

const setLeftToRightClass = (elementId) => {
  const el = document.getElementById(elementId);
  el.classList.add('active', 'to-right');
}

const setClientStatus = (status) => {
  const client = document.getElementById('client');
  client.classList.add(status);

  if (status === 'error') {
    const gateway = document.getElementById('gateway-img-container');
    gateway.classList.add(status);
  }
}

const processArrowFlows = async (message) => {
  const serverOne = message.includes('server-one');

  if (serverOne) {
    setRightToLeftClass('server-one-arrows');
    await wait(500);
    setLeftToRightClass('server-one-arrows');
    await wait(500);
    setLeftToRightClass('client-arrows');
    await wait(300);

  } else {
    setRightToLeftClass('server-two-arrows');
    await wait(500);
    setLeftToRightClass('server-two-arrows');
    await wait(500);
    setLeftToRightClass('client-arrows');
    await wait(300);
  }
}

const resetChanges = (elementId) => {
  const el = document.getElementById(elementId);
  el.className = '';
}

const resetServerOneFlow = () => {
  resetChanges('client-arrows');
  resetChanges('server-one-arrows');
  resetChanges('client');
  resetChanges('gateway-img-container');
}

const resetServerTwoFlow = () => {
  resetChanges('client-arrows');
  resetChanges('server-two-arrows');
  resetChanges('client');
  resetChanges('gateway-img-container');
}

button.addEventListener('click', async () => {
  button.disabled = true;
  resetServerOneFlow();
  resetServerTwoFlow();
  await wait(200);

  setRightToLeftClass('client-arrows');

  try {
    const response = await fetch('/servers');
    const data =  await response.json();

    await processArrowFlows(data.message);

    setClientStatus('success');

    textData.innerText = JSON.stringify(data);
    textData.classList.toggle('error', false);

  } catch (error) {
    const { status, message } = error;
    if (status) {
      await processArrowFlows(message);
    } else {
      delete error.message
      error.status = 500
      error.message = 'Internal Server Error'
    }

    setClientStatus('error');

    textData.innerText = JSON.stringify({...error});
    textData.classList.toggle('error', true);
  } finally {
    button.disabled = false;
  }
})