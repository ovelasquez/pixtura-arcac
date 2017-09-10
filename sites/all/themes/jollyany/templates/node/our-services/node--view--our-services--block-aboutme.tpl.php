<div class="servicebox">
    <a href="<?php print $node_url; ?>">
        <div class="service-icon-circle border-none make-bg">
            <i class="fa <?php print render($content['field_icon']); ?>"></i>
        </div>
    </a>
    <div class="title">
        <h3><?php echo $title; ?></h3>
    </div>
    <?php print $node->body['und'][0]['summary']; ?>
    <a class="readmore" href="<?php echo $node_url; ?>"><?php print t('Read More...'); ?></a>
</div>