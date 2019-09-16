<!DOCTYPE html>
<html lang="en" ng-app="newApp">
	<title>{{title.name}} </title>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, height=device-height">
		<!-- Font Awesome -->
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
		<!-- Bootstrap core CSS -->
		<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
		<!-- Material Design Bootstrap -->
		<link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.8/css/mdb.min.css" rel="stylesheet">
		<link href="css/custom.css" rel="stylesheet">
		<!-- AngularJS CDN -->
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular-route.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.8/angular-animate.js"></script>
		<!-- App scripts -->
		<script src="app.js"></script>
		<script src="components/components.js"></script>
		

	</head>
	<body >
		<div class="overlay" id="overlay"></div>
		<nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top navbar-custom">
		    <div class="container-fluid header-wrapper">
			<div class="navbar-wrapper text-center">
				<a  onClick="Nav()" action="{{title.action}}" id="Nav"><i class="{{title.bicon}} {{title.test}} fa-1x icon white-text"></i></a>
			    <div class="navbar-brand"> {{title.name}} </div>
			    <a onClick="window.location.reload();"> <i class="fas fa-sync-alt fa-1x icon white-text"></i> </a>
			</div>
		    </div>
		</nav>

		<div id="sidenav" class="sidenav" style="width: 0px">
		  <a onClick = "closeSideNav();" class="hamburg"><i class="fas fa-bars fa-1x icon white-text"></i></a>
		  <a onClick = "closeSideNav();" class="big-text" href="#!/profile">Profile</a>
		  <a onClick="logout();" class="big-text" href="">Logout</a>
		</div>
		<div ng-view id="main"></div>


		<!-- JQuery -->
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<!-- Bootstrap tooltips -->
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
		<!-- Bootstrap core JavaScript -->
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
		<!-- MDB core JavaScript -->
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.8/js/mdb.min.js"></script>

		<script type="text/javascript" src="js/custom.js"></script>
		<!-- barcode scan -->
		<script src="js/instascan.min.js"></script>
        <script type="text/javascript">
            function displayMsg(){
                console.log("yo");
                Print.postMessage("scan");
            }
        </script>
	</body>
</html>
