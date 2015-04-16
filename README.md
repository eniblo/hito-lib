# hito-lib

## components

###Select###

inspired by "ionic select".

###Toast###

modified Onsen UI notification component.

```
hito.toast.show({
  title:"Complete!",
  message:"Please add next",
  time:1000
});
```

###Loading###

Show/Hide modal loading view. 

```
hito.loading.show({
  title:"Loading",
  message:"Please wait",
  icon:"fa-home"
})

hito.loading.hide();
```

###PopoverMenu###

Show popover menu easily. Same $scope.

```
$scope.showMenu = function(target){
                hito.popoverMenu.show(
                    appNavigator.getCurrentPage(),
                    target,
                    [
                        {
                            icon:"fa-home",
                            title:"About us",
                            func:"showAlert()"
                        },
                        {
                            icon:"fa-user",
                            title:"Setting",
                            func:"showAlert()"
                        }
                    ]
                );
            }
```