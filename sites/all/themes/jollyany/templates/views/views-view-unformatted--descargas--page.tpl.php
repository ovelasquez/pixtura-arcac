
    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div class="widget">
            <?php if (!empty($title)): ?>
                <div class="custom-services-title"><h1 class="cat-servprod-sidebar"><?php print $title; ?></h1></div>
            <?php endif; ?>

            <ul class="nav nav-tabs nav-stacked">
                <?php
                $i = 1;
                foreach ($rows as $id => $row):
                    ?>
                    <?php print $row; ?>     
                    <?php
                    $i++;
                endforeach;
                ?>
            </ul>
        </div>
    </div>
