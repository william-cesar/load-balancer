## <img align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" alt="Nginx logo" height="70"/>  Load Balancer

This is a load balancer visualization created on top of Nginx. The load balancer is
able to distribute traffic to the servers based on the load of the servers. It uses 
the `round_robin` algorithm to distribute the traffic.

## Technologies used

- [Nginx](https://nginx.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)
- [JavaScript](https://www.w3schools.com/js/)

### How to use

```bash
$ ENVIRONMENT=local docker-compose up -d
```

### References

- [Nginx](https://nginx.org/)
- [Round Robin](https://en.wikipedia.org/wiki/Round-robin)
- [Nginx Load Balancer](https://www.nginx.com/blog/what-is-a-load-balancer/)
