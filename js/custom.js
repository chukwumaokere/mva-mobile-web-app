var url ='http://workspace.local/mva/phoneapi';
var url ='https://devl06.borugroup.com/mvadev/phoneapi';
function Nav(){
	var action = document.getElementById("Nav").getAttribute("action");
	if (action == 'openSideNav'){
		$("#overlay").toggle();
		document.getElementById("sidenav").style.paddingLeft = "5.5%";
		document.getElementById("sidenav").style.width = "80%";
	}else{
		$("#main").addClass("back");
		window.history.back();
	}
}
function closeSideNav(){
	$("#overlay").toggle();
	document.getElementById("sidenav").style.paddingLeft = "0%";
	document.getElementById("sidenav").style.width = "0%";
}
function scansample(){
	if($('#barcodenumber').val() ==''){
		$('#samplemsg').html('Please enter your barcode number.');
		$('#samplealert').modal('show');
		return false;
	}
	var data = {
		samplenumber: $('#barcodenumber').val(),
	};
	$.ajax({
		type: "POST",
		url: url+'/scanasample.php',
		data: data,
		dataType: 'json',
		success: function(response){
			if(response.success){
				if(response.samplearr)
				var samplearr = response.samplearr;
				getrelatedAsset($('#barcodenumber').val());
				localStorage.setItem('barcode',$('#barcodenumber').val());
				window.location.replace(".#!/asset?barcodenumber=all");
				
			}else{
				$('#samplemsg').html('Sample Not Found.');
				$('#samplealert').modal('show');
				/*$('#sampleid').val($('#barcodenumber').val());
				$('#createsample').modal('show');*/
			}
		}
	});
} 

function getrelatedAsset(selectedsampleid){
	localStorage.setItem('assetsentries','');
	localStorage.setItem('assetsstatus','');
	localStorage.setItem('assetsmessage','');
	var data = {
		barcode: localStorage.getItem('barcode'),
	};
	$.ajax({
	    type: "POST",
		url: url+'/OrderTests.php',
		data: data,
		dataType: 'json',
	    success: function (responseData) {
	        localStorage.setItem('assetsheader',JSON.stringify(responseData.data.assets.header));
	        //localStorage.setItem('assetsentries',JSON.stringify(responseData.data.assets.entries));
	    	var res = [];
            for (var x in responseData.data.assets.entries){
                responseData.data.assets.entries.hasOwnProperty(x) && res.push(responseData.data.assets.entries[x]);
            }
            localStorage.setItem('assetsentries',JSON.stringify(res));
	        localStorage.setItem('assetsstatus',JSON.stringify(responseData.data.status));
			localStorage.setItem('assetsmessage',JSON.stringify(responseData.data.message));
	    }
	});
}

function createasset(){
	$('#createasset').modal('show');
}
function scanasset(){
	if($('#barcodenumberasset').val() ==''){
		var assetname = 'all';
	}else{
		var assetname = $('#barcodenumberasset').val();
	}
	window.location.replace(".#!/asset?barcodenumber="+assetname);
}
function validationform(){
    var flag = true;
    var val_cardnumber = $("input[name='serialnumber']").val();
    if(val_cardnumber == ''){
        $("input[name='serialnumber']").addClass('requiredfields');
        $("#lbl_serialnumber").css("display","block");
        flag = false;
    }else{
        $("input[name='serialnumber']").removeClass('requiredfields');
        $("#lbl_serialnumber").css("display","none");
    }
    
    return flag;
}

function saveasset(){
	var flag = validationform();
    if(!flag){
        return false;
    }
    var data = {
		serialnumber: $('#serialnumber').val(),
		status: $('#status').val(),
		clientcode: $('#clientcode').val(),
	};
	$.ajax({
		type: "POST",
		url: url+'/createasset.php',
		data: data,
		dataType: 'json',
		success: function(response){
			if(response.success){
				$('#assetmsg').html('Asset created successfully.');
				$('#assetfound').modal('show');
				$('#createasset').modal('hide');
			}else{
				$('#createasset').modal('show');
			}
		}
	});
    $('#createasset').modal('hide');
}

function savesample(){
	$('#createsample').modal('hide');
	window.location.replace(".#!/asset");
	return true;
	var flag = validationform();
    if(!flag){
        return false;
    }

    var data = {
		sampleid: $('#sampleid').val(),
		cf_1089: $('#cf_1089').val(),
		cf_1227: $('#cf_1227').val(),
	};
	$.ajax({
		type: "POST",
		url: url+'/createsample.php',
		data: data,
		dataType: 'json',
		success: function(response){
			if(response.success){
				$('#assetmsg').html('Sample created successfully.');
				$('#samplealert').modal('show');
			}else{
				$('#createsample').modal('show');
			}
		}
	});
    $('#createsample').modal('hide');
}
function scanassetnumebr(){
	return true;
	console.log('start scanassetnumebr');
	  let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
      scanner.addListener('scan', function (content) {
        console.log(content);
        $('#barcodenumberasset').val(content);
      });

      Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
        	var selectedCam = cameras[0];
		    $.each(cameras, (i, c) => {
		        if (c.name.indexOf('back') != -1) {
		            selectedCam = c;
		            return false;
		        }
		    });
		    scanner.start(selectedCam);
        } else {
          console.error('No cameras found.');
        }

      }).catch(function (e) {
        console.error(e);
      });
}
function scansamplenumebr(){
	return true;
	  let scanner = new Instascan.Scanner({ video: document.getElementById('previewsample') });
      scanner.addListener('scan', function (content) {
        console.log(content);
        $('#barcodenumber').val(content);
      });

      Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
        	var selectedCam = cameras[0];
		    $.each(cameras, (i, c) => {
		        if (c.name.indexOf('back') != -1) {
		            selectedCam = c;
		            return false;
		        }
		    });
		    scanner.start(selectedCam);
        } else {
          console.error('No cameras found.');
        }

      }).catch(function (e) {
        console.error(e);
      });
}
function login(){
	var data = {
		_operation: 'login',
		username: $('#defaultForm-email').val(),
		password: $('#defaultForm-pass').val()

	};
	$.ajax({
		type: "POST",
		url: url+'/authenticate.php',
		data: data,
		dataType: 'json',
		success: function(response){
			if(response.success){
				console.log('Login done');
				var data = response.data;
				let username = data.username;
				let firstname = data.firstname;
				let lastname = data.lastname;
				let email =data.email;
				let phone =data.phone;
				let accountname =data.accountname;
				let userid = data.id;
				localStorage.setItem('username',username);
				localStorage.setItem('firstname',firstname);
				localStorage.setItem('lastname',lastname);
				localStorage.setItem('email',email);
				localStorage.setItem('userid',userid);
				localStorage.setItem('phone',phone);
				localStorage.setItem('accountname',accountname);
				$("#overlay").hide();
				document.getElementById("sidenav").style.paddingLeft = "0%";
				document.getElementById("sidenav").style.width = "0%";

				window.location.replace(".#!/home");
			}else{
				$('#defaultForm-email').val('');
				$('#defaultForm-pass').val('');
				$('#loginFailed').modal('show');
			}
		}
	});
}
function logout(){
	localStorage.clear();
	$("#overlay").hide();
	document.getElementById("sidenav").style.paddingLeft = "0%";
	document.getElementById("sidenav").style.width = "0%";
	window.location.replace(".#!/login");
}
function goHome(){
	$("#main").addClass("back");
	window.location.href=".#/";
}
function callSupport(){
	window.location.href='tel://17733072549';
	//TODO: find method that works on native android
}
$('div.overlay').on('click', function(e){
	closeSideNav();
});



    /*var value= $(this).val().toLowerCase();
    $('div > a.order-list').filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    })*/
$(document).on("keyup","#barcodenumberasset",function(){
    var value= $(this).val().toLowerCase();
    $('div > a.asset-list').filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});
//div > a.order-list


//Anchor link triggering Loading Anim
var Anchors = document.getElementsByTagName('a');
for (var i = 0; i < Anchors.length ; i++){
	Anchors[i].addEventListener('click', function(){
		if($('loading-spinner').hasClass('hide')){
			$('loading-spinner').removeClass('hide');
			$('loading-spinner').addClass('show');
		}
	})
}
