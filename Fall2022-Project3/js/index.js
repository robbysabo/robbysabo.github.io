/*********************************************************************

*Original Author: Robert Sabo
*Date Created: 09/07/2022
*Version: 1.0
*Date Last Modified: 09/09/2022
*Modified by: Robert Sabo
*Modification log:

        Verison 1.0 - 09/09/2022 - Made Mod Log.
        Verison 1.1 - 09/23/2022 - Created accordion for the FAQ. carousel effect of all the arcades inside the faq answer tab.

******************************************************************** */

"use strict";

// FAQ accordion
$("#accordion").accordion({
        event: "click",
        heightStyle: "content",
        collapsible: true,
        active: false
})

$(document).ready(() => {

        const slider = $("#image_list"); // slider = ul element

        // the click event handler for the right button
        $("#right_button").click(() => {

                // get value of current left property
                const leftProperty = parseInt(slider.css("left"));

                // determine new value of left property
                let newLeftProperty = 0;
                if (leftProperty - 100 > -600) {
                        newLeftProperty = leftProperty - 300;
                }

                // use the animate function to change the left property
                slider.animate({ left: newLeftProperty }, 1000);
        });

        // the click event handler for the left button
        $("#left_button").click(() => {

                // get value of current left property
                const leftProperty = parseInt(slider.css("left"));

                // determine new value of left property
                let newLeftProperty = 0;
                if (leftProperty < 0) {
                        newLeftProperty = leftProperty + 300;
                }
                else {
                        newLeftProperty = -600;
                }

                // use the animate function to change the left property
                slider.animate({ left: newLeftProperty }, 1000);
        });

});
