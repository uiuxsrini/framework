define(["modules/ui/module"],function(a){"use strict";a.registerDirective("smartHtmlPopoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&",isOpen:"&"},template:'<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title" bind-html-unsafe="title" ng-show="title"></h3><div class="popover-content" bind-html-unsafe="content"></div></div></div>'}}),a.registerDirective("smartHtmlPopover",["$tooltip",function(a){return a("smartHtmlPopover","popover","click")}])});