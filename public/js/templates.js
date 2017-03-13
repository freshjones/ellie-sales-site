(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/branding.tpl.html',
    '<div class="border-bottom border-silver">\n' +
    '	<div class="mx4 flex align-items justify-between ">\n' +
    '		<h1 class="h2 m1 p0"><a ui-sref="home" class="text-decoration-none"><span class="fuchsia bold">ellie</span>&nbsp;<small>by saasafari</small></a></h1>\n' +
    '		<div class="flex p1">\n' +
    '		  <div class="mr1"><a ui-sref="contact" class="btn not-rounded btn-small btn-outline fuchsia ">Contact</a></div>\n' +
    '		  <div><a ui-sref="signup" class="btn not-rounded btn-small btn-primary bg-fuchsia">Get Started</a></div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/confirm.tpl.html',
    '<div class="col col-8">\n' +
    '	<h1 class="mb0">Check Your Email!</h1>\n' +
    '	<p class="mt0">To complete the signup process, please enter the code from your verification email in the form field below.<br />\n' +
    '	If you did not receive a confirmation code click <a class="bold fuchsia" ui-sref="resend-confirmation">here</a>.</p>\n' +
    '	<form name="confirm" ng-submit="attemptConfirmation(code)" autocomplete="off" novalidate>\n' +
    '		<div>\n' +
    '			<label for="name">\n' +
    '				Confirmation Code\n' +
    '				<div ng-messages="confirm.code.$error" ng-if="confirm.code.$dirty" class="inline red">\n' +
    '			    	<span ng-message="required">(Required)</span>\n' +
    '			    	<span ng-message="pattern">(Must Be A Valid Code)</span>\n' +
    '				</div>\n' +
    '				<div class="inline green" ng-show="confirm.code.$valid">(OK)</div>\n' +
    '			</label>\n' +
    '			<input \n' +
    '				type="text" \n' +
    '				name="code" \n' +
    '				id="code" \n' +
    '				ng-model="code" \n' +
    '				ng-pattern="onlyNumbers" \n' +
    '				placeholder="Enter Confirmation Code" \n' +
    '				required />\n' +
    '		</div>\n' +
    '\n' +
    '		<button \n' +
    '			type="submit" \n' +
    '			class="btn btn-primary not-rounded bg-fuchsia" \n' +
    '			ng-disabled="confirm.$invalid || submitDisabled"><span class="glyphicon glyphicon-lock" aria-hidden="true"></span> Sign Up</button>\n' +
    '	</form>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/login.tpl.html',
    '<form ng-submit="save()">\n' +
    '	<input type="text" name="email" ng-model="user.email" placeholder="email address" />\n' +
    '	<input type="password" name="password" ng-model="user.password" placeholder="password" />\n' +
    '	<input type="submit" value="Go" />\n' +
    '</form>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/main.tpl.html',
    '<div ui-view="branding"></div>\n' +
    '<nav ui-view="navigation"></nav>\n' +
    '<div class="mx4" ui-view="main"></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/nav.tpl.html',
    '<div class="border-bottom border-silver">\n' +
    '    <div class="mx4 flex align-items justify-between">\n' +
    '        <ul class="list-reset m1">\n' +
    '            <li class="inline-block mr1"><a class="text-decoration-none black" href="#">Home</a></li>\n' +
    '            <li class="inline-block mr1"><a class="text-decoration-none black" href="#about">Design</a></li>\n' +
    '            <li class="inline-block mr1"><a class="text-decoration-none black" href="#contact">Connectivity</a></li>\n' +
    '            <li class="inline-block mr1"><a class="text-decoration-none black" href="#contact">Support</a></li>\n' +
    '            <li class="inline-block"><a class="text-decoration-none black" href="#contact">Contact</a></li>\n' +
    '        </ul>\n' +
    '        <ul class="list-reset m1">\n' +
    '            <li class="inline-block mr1"><a class="text-decoration-none black" ui-sref="support">Support</a></li>\n' +
    '            <li class="inline-block"><a class="text-decoration-none black" ui-sref="signin">Sign In</a></li>\n' +
    '        </ul>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/signup.tpl.html',
    '<div class="col col-8">\n' +
    '	<h1 class="mb0">Create An Account</h1>\n' +
    '	<p class="mt0">Already have an <span class="bold">ellie</span> account? <a class="fuchsia bold" ui-sref="signin">Sign In</a></p>\n' +
    '	<form name="signup" ng-submit="attemptSignUp(user)" autocomplete="off" novalidate>\n' +
    '		<div>\n' +
    '			<label for="name">\n' +
    '				Name\n' +
    '				<div class="inline red" ng-if="signup.name.$dirty" ng-show=\'signup.name.$error.required\'>(Required)</div>\n' +
    '				<div class="inline green" ng-show="signup.name.$valid">(Good)</div>\n' +
    '			</label>\n' +
    '			<input \n' +
    '				type="text" \n' +
    '				name="name" \n' +
    '				id="name" \n' +
    '				ng-model="user.name" \n' +
    '				placeholder="Name" \n' +
    '				required />\n' +
    '			\n' +
    '		</div>\n' +
    '\n' +
    '		<div>\n' +
    '			<label for="username">\n' +
    '				Email Address\n' +
    '				<div ng-messages="signup.username.$error" ng-if="signup.username.$dirty" class="inline red">\n' +
    '			    	<span ng-message="required">(Required)</span>\n' +
    '			    	<span ng-message="pattern">(Must Be A Valid Email)</span>\n' +
    '				</div>\n' +
    '				<div class="inline green" ng-show="signup.username.$valid">(Good)</div>\n' +
    '			</label>\n' +
    '			<input \n' +
    '				type="email" \n' +
    '				name="username"\n' +
    '				id="username"\n' +
    '				pattern="^[a-z]+[a-z0-9._]+@[a-z]+\\.[a-z.]{2,5}$" \n' +
    '				ng-model="user.username" \n' +
    '				placeholder="Email Address" \n' +
    '				required />\n' +
    '		</div>\n' +
    '\n' +
    '\n' +
    '		<div class="flex">\n' +
    '			<div class="flex-auto mr1">\n' +
    '				<label for="password">\n' +
    '					Password\n' +
    '					<div ng-messages="signup.password.$error" ng-if="signup.password.$dirty" class="inline red">\n' +
    '			        	<span ng-message="required">(Required)</span>\n' +
    '			       	 	<span ng-message="pattern">(Password is not strong enough)</span>\n' +
    '			    	</div>\n' +
    '			    	<div class="inline green" ng-show="signup.password.$valid">(Good)</div>\n' +
    '				</label>\n' +
    '				<input \n' +
    '					type="password" \n' +
    '					name="password" \n' +
    '					id="password" \n' +
    '					ng-pattern="passwordStrength" \n' +
    '					ng-model="user.password" \n' +
    '					placeholder="Enter a Password" \n' +
    '					required />\n' +
    '			</div>\n' +
    '\n' +
    '			<div class="flex-auto">\n' +
    '				<label for="password_confirm">\n' +
    '					Confirm\n' +
    '					<div ng-messages="signup.password_confirm.$error" ng-if="signup.password_confirm.$dirty" class="inline red">\n' +
    '				        <span ng-message="required">(Required)</span>\n' +
    '				        <span ng-message="passwordMatch">(Password does not match)</span>\n' +
    '				    </div>\n' +
    '				    <div class="inline green" ng-show="signup.password_confirm.$valid">(Good)</div>\n' +
    '				</label>\n' +
    '				<input \n' +
    '					type="password" \n' +
    '					name="password_confirm" \n' +
    '					id="password_confirm" \n' +
    '					ng-model="user.password_confirm" \n' +
    '					placeholder="Confirm Your Password" \n' +
    '					match-password="password" \n' +
    '					required />\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		\n' +
    '\n' +
    '		<button \n' +
    '			type="submit" \n' +
    '			class="btn btn-primary not-rounded bg-fuchsia" \n' +
    '			ng-disabled="signup.$invalid || submitDisabled"><span class="glyphicon glyphicon-lock" aria-hidden="true"></span> Sign Up</button>\n' +
    '	</form>\n' +
    '</div>');
}]);
})();
