<h1 align="center">
    <a href="https://github.com/vazco">vazco</a>/Universe Admin
</h1>

&nbsp;

<h3 align="center">
  -- Abandonware. This package is deprecated! --
</h3>

&nbsp;

### Adding link
```js
import {AdminMenu} from '{universe:admin}';

AdminMenu.add({
    text: 'Add',
    type: 'link',
    icon: 'plus', // SemanticUI icon

    link: '/add'    // link href
    action: () => { // link onClick
        console.log('Add clicked.');
    }}
});
```

### Adding submenu
```js
import {AdminMenu} from '{universe:admin}';

import AdminView from './AdminView';

AdminMenu.add({
    icon: 'users',
    link: '/admin/users',
    text: 'Users',
    type: 'menu',

    view: AdminView, // or
    view: <AdminView />,

    items: [
        {
            text: 'Add',
            type: 'link',
            icon: 'plus',

            link: '/add',
            action: () => {
                console.log('Add clicked.');
            }}
        }
    ]
});
```

### Rendering
```js
import {AdminPanel} from '{universe:admin}';

<AdminPanel view="users"/>                 // If URL is /users
<AdminPanel view="users" prefix="/admin"/> // If URL is /admin/users
```
### License

<img src="https://vazco.eu/banner.png" align="right">

**Like every package maintained by [Vazco](https://vazco.eu/), Universe Admin is [MIT licensed](https://github.com/vazco/uniforms/blob/master/LICENSE).**


