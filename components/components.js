function HomeController() {
    if(localStorage.getItem('userid')){
        $("#overlay").hide();
        document.getElementById("sidenav").style.paddingLeft = "0%";
        document.getElementById("sidenav").style.width = "0%";
        window.location.replace(".#!/");
        scansamplenumebr();
    }else{
        $("#overlay").hide();
        document.getElementById("sidenav").style.paddingLeft = "0%";
        document.getElementById("sidenav").style.width = "0%";
        window.location.replace(".#!/login");
    }
}

function AssetListController($routeParams) {
    if(localStorage.getItem('userid')){
        $("#overlay").hide();
        document.getElementById("sidenav").style.paddingLeft = "0%";
        document.getElementById("sidenav").style.width = "0%";
        this.assetsentries = JSON.parse(localStorage.getItem('assetsentries'));
        if($routeParams.barcodenumber!=undefined && $routeParams.barcodenumber != 'all'){
            if($routeParams.barcodenumber != ''){
                var asset_info = this.assetsentries.filter(assetVal => {
                    return assetVal.assetname == $routeParams.barcodenumber;
                });
                this.assetsentries=asset_info;
            }
        }
        this.assetcount = this.assetsentries.length;
        this.assetbutton = (this.assetsentries.length == 0) ? 'buttonshow' : 'buttonhide';
        
    }else{
        $("#overlay").hide();
        document.getElementById("sidenav").style.paddingLeft = "0%";
        document.getElementById("sidenav").style.width = "0%";
        window.location.replace(".#!/login");
    }
}
function ProfileController(){
    this.profile_details = {
        "firstname": localStorage.getItem('firstname'),
        "lastname": localStorage.getItem('lastname'),
        "email1": localStorage.getItem('email'),
        "phone1": localStorage.getItem('phone'),
        "account_id": localStorage.getItem('company'),
    }
}


newApp.component('profile', {
    templateUrl: 'components/profile.html',
    controller: ProfileController,
});
newApp.component('home', {
    templateUrl: 'components/home.html',
    controller: HomeController,
});
newApp.component('asset', {
    templateUrl: 'components/asset.html',
    controller: AssetListController,
})
