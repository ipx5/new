import React from 'react';

function Template(props){
    return( 
    <script {...props}>} 
    <div {...props}>
    <div {...props}>
    <h3 {...props}>{props.movieTitle}</h3>
    <p {...props}>{props.movieDirector}</p>
  </div>
  </div>
</script>
    )
}

export default Template;
