# Car Catalog

Steps:

1. In the root directory of the project, install the node_modules for the client side with follwing command
```
npm install
```
#Note: If you face any issues installing the node_modules, try following command from the directory you are running npm install from.
```
npm config set unsafe-perm=true
```
..and then npm install again. 

2. Go to server/react-backend directory and npm install to install the node_modules for the mini server. Once installed, start the server from this directory with 
```
PORT=3001 node bin/www
```
You should not see any message in your terminal(unless you receive an error) , just hop on to step 3

3. In the root directory of the project, start the dev server with
```
npm start
```




