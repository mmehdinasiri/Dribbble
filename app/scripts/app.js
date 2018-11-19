var fixed_menu ={
    $header : $('[data-header]'),
    menuHeight : $('[data-header]').find('.header').outerHeight(),



    init :function() {
        this.atachEvents();
        return this;
    },
    atachEvents: function() {
        var self = this;
        console.log(self.menuHeight);
        $(document).on('scroll' , function(){
            var scroll = $(window).scrollTop();
            if(scroll >  0){
                self.$header.addClass('fixed-menu')
            }else{
                self.$header.removeClass('fixed-menu')
            }
        })

        return this;
        },
  }

  $(function(){
    fixed_menu.init()
  })