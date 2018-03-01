<!--Import jQuery before materialize.js-->
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"></script><

script>
    $(document).ready(function () {
        var user, to, subject, text;
        $("#send_email").click(function () {
            // enter your email account that you want to recieve emails at.
            to = "kari.eronen71@gmail.com";
            name = $("#name").val();
            user = $("#user_email").val();
            text = $("#textarea1").val();
            // $("#message").text("Sending E-mail...Please wait");
            $.get("http://localhost:8080/send", {
                to: to,
                name: name,
                user: user,
                text: text
            }, function (data) {
                if (data == "sent") {
                    console.log("Email sent");
                }
            });
        });
    });
</script>

<!--Modal Trigger Script-->
<script>
$(document).ready(function(){
// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
$('.modal-trigger').leanModal();
});
</script>

<script defer="" src="/scripts/manifest.7561b38e92607c13d50c.js"></script>
<script defer="" src="/scripts/vendor.f2e1672d0a08e8e331c3.js"></script>
<script defer="" src="/scripts/bundle.0843df586e67ff7db106.js"></script>
