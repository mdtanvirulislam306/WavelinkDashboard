! function(t) {
    "use strict";
    t.sweetAlert = {
       
        confirm: function(t, e, o) {
            document.querySelector(t).addEventListener("click", (function() {
                Swal.fire({
                    icon: e.icon ? e.icon : null,
                    title: e.title ? e.title : null,
                    text: e.text ? e.text : null,
                    showConfirmButton: void 0 === e.showConfirmButton || JSON.parse(e.showConfirmButton),
                    confirmButtonText: e.confirmButtonText ? e.confirmButtonText : "Ok",
                    showCancelButton: void 0 !== e.showCancelButton && JSON.parse(e.showCancelButton),
                    cancelButtonText: e.cancelButtonText ? e.cancelButtonText : "Cancel",
                    position: e.position ? e.position : "center",
                    timer: e.timer ? parseInt(e.timer) : void 0,
                    timerProgressBar: !!e.timerProgressBar && e.timerProgressBar
                }).then(t => {
                    t.isConfirmed && Swal.fire({
                        icon: o.icon ? o.icon : null,
                        title: o.title ? o.title : null,
                        text: o.text ? o.text : null,
                        showConfirmButton: void 0 === o.showConfirmButton || JSON.parse(o.showConfirmButton),
                        confirmButtonText: o.confirmButtonText ? o.confirmButtonText : "Ok",
                        showCancelButton: void 0 !== o.showCancelButton && JSON.parse(o.showCancelButton),
                        cancelButtonText: o.cancelButtonText ? o.cancelButtonText : "Cancel",
                        position: o.position ? o.position : "center",
                        timer: o.timer ? parseInt(o.timer) : void 0,
                        timerProgressBar: !!o.timerProgressBar && o.timerProgressBar
                    })
                })
            }))
        }
    }, t.sweetAlert.init = function() {
       t.sweetAlert.confirm(".eg-swal-confirm-button", {
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: !0,
            confirmButtonText: "Yes, delete it!"
        }, {
            icon: "success",
            title: "Deleted!",
            text: "Your file has been deleted."
        })
    }, t.winLoad(t.sweetAlert.init)
}(NioApp);