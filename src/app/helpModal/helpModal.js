'use strict';
/**
*
* @module ozpWebtop.helpModal
*
* @requires ui.bootstrap
*
*/
angular.module('ozpWebtop.helpModal', ['ui.bootstrap',
'ozpWebtop.models']);


/**
* Controller for help modal
*
* @param $scope
* @param $window
* @param $modalInstance
* @constructor
*/
angular.module('ozpWebtop.helpModal').controller(
'helpModalInstanceCtrl', function($scope, $modalInstance, $window) {

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    //                           initialization
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	$scope.helpDocs = $window.OzoneConfig.HELP_DOCS;
	$scope.helpVideo = $window.OzoneConfig.HELP_VIDEOS;


	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// methods
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	/**
	* Handler invoked when dialog is closed via Ok button
	*
	* TODO @method for ok button
	*/
	$scope.ok = function () {
	  $modalInstance.close();
	};

	/**
	* Handler invoked when modal is dismissed via the cancel button
	*
	* @method cancel
	*/
	$scope.cancel = function () {
	  $modalInstance.dismiss('cancel');
	};

});
