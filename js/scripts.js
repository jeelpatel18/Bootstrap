<script>
        $(document).ready(function() {
            $('#mycarousel').carousel({interval:500});
            $("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            });

            // A4 - Task - 3

            $("#loginCode").click(function() {
                $('#loginModal').modal('toggle');
            });

            // A4 - Task - 2
            $("#reserveCode").click(function() {
                $('#reserveModal').modal('toggle');
            });
            
        });
    </script>