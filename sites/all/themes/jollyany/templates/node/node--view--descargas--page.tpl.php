<?php
	/**
	 * @file
	 * jollyany's theme implementation to display a single node.
	 */
	global $base_url; 
	$next = jollyany_pagination($node, 'n');
	$prev = jollyany_pagination($node, 'p');

	if ($next != NULL) { 
	  $next_url = url('node/' . $next, array('absolute' => TRUE));
	}

	if ($prev != NULL) { 
	  $prev_url = url('node/' . $prev, array('absolute' => TRUE));
	}
        
?>


	<div class="row">
       <div class="blog-masonry">
            <div class="col-lg-12">
                <div class="blog-carousel">
                    <div class="blog-carousel-header">
                        <h2><?php echo $title; ?></h2>
						<div class="blog-carousel-meta">
							<!--span><i class="fa fa-calendar"></i> <?php print format_date($node->created, 'custom', 'd M, Y'); ?></span-->
						</div>
                    </div>
                    <div class="blog-carousel-desc">
                        <?php
						  // We hide the comments and links now so that we can render them later.
						  hide($content['comments']);
						  hide($content['links']);
                                                  hide($content['field_download_category']);
						  if (isset($content['field_url_enlace']) && $content['field_url_enlace']!==''):
                                                      $urlE = render($content['field_url_enlace']);
                                                      print "<a href='$urlE' target='_blank'>$urlE</a>";
                                                      else:
                                                       print render($content);
                                                  endif;
                                                 
						?>
                    </div>
                </div>
				
				<div class="clearfix"></div>                
                
				
				
				
            </div>
		</div>
    </div>

