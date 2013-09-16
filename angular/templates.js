angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("developers/index.html",
    "<ul ng-controller=\"DeveloperController\">\n" +
    "    <li ng-repeat=\"developer in developers\">\n" +
    "        {{ developer.firstName }} \"{{ developer.login }}\" {{ developer.lastName }}\n" +
    "    </li>\n" +
    "</ul>"
  );

  $templateCache.put("test/index.html",
    "{{hello}}"
  );

}]);
