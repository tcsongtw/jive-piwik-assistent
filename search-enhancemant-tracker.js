jQuery.get("https://" + window.location.hostname + '/api/core/v3/people/@me', function(data){
    var profiles = data.jive.profile;
    for ( var idx = 0; idx < profiles.length; idx += 1 ){
        var profile = profiles[idx];
        var label = profile.jive_label;
        var value = profile.value;

        if ( label === "primary_role" ){
            _paq.push(['setCustomVariable', 1, label, value, 'visit']);
        }
    }
})

