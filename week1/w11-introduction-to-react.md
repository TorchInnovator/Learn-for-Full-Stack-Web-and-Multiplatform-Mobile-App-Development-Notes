# Getting Started with React

### Installing Yarn

* To install _create-react-app _globally

```
yarn global add create-react-app
```



### Generating and Serving a React Project using_create-react-app_

* create a new React application named _confusion_

```
create-react-app confusion
```

* Move to the _confusion _folder

* open browser at the address[http://](http://%3Cyour/)&lt;Your Computer's Name&gt;:3000.



## Configuring your React Application



### Configure your React Project to use Reactstrap

* To configure your project to use reactstrap

```
yarn add bootstrap
yarn add reactstrap
yarn add react-popper@
```

### Configure to use Bootstrap 4

* Add css file in index.js

```
import 'bootstrap/dist/css/bootstrap.min.css';
```

### Adding a Navigation Bar:

* update App.js to add navigation bar

```js
. . .

import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

. . .
```



