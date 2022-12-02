/*********************************************************************

*Original Author: Robert Sabo
*Date Created: 09/07/2022
*Version: 1.0
*Date Last Modified: 09/09/2022
*Modified by: Robert Sabo
*Modification log:

        Verison 1.0 - 09/09/2022 - Made Mod Log.
        Verison 1.1 - 09/23/2022 - Created accordion for the FAQ. carousel effect of all the arcades inside the faq answer tab.
        Verison 1.2 - 10/01/2022 - Remove old carousel code. Made new carousel with Cycle2 plugin.

******************************************************************** */

"use strict";

$(document).ready(() => {

        // FAQ accordion
        $("#accordion").accordion({
                event: "click",
                heightStyle: "content",
                collapsible: true,
                active: true
        }); // accordion
});