(function() {
  return {
    events: {
      'ticket.save':'onTicketSave'
    },

    onTicketSave: function() {
      var comment = this.comment();
      var original = comment.text();
      var placeholder = this.setting('placeholder');
      if (original.length > 0 && comment.type() == 'publicReply' && original.indexOf(placeholder) < 0){
        comment.text(original+'\n\n'+placeholder);
      }
      return true;
    }
  };
}());