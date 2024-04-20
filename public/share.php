<!DOCTYPE html>
<html lang="en">
<head>
    <?php 
        // $meta = json_decode($_GET['object']);
         if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')   
         $url = "https://";   
            else  
                 $url = "http://";   
            // Append the host(domain name, ip) to the URL.   
            $url.= $_SERVER['HTTP_HOST'];   
            // Append the requested resource location to the URL   
            $url.= $_SERVER['REQUEST_URI'];    
	$parts = parse_url(urldecode($url));
	parse_str($parts['query'], $query);

	$image= $query['image'];
	$urllink= $query['url'];
  $desc = $query['desc']
    ?>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/assets/svg/favicon.svg" />
    <meta http-equiv="Cross-Origin-Embedder-Policy" content="same-origin" />
    <meta name="title" content="CapitaLand kỉ niệm 30 năm hoạt động" />
    <meta
      name="description"
      content="<?php echo $desc ?>"
    />
    <!-- FB  -->
    <meta property="og:url" content="landing.octokit.co" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="CapitaLand kỉ niệm 30 năm hoạt động" />
    <meta
      property="og:description"
      content="<?php echo $desc ?>"
    />
    <meta property="og:image" content="<?php echo $image.'?mod='.time()?>" />
    <meta property="og:image:url" content="<?php echo $image.'?mod='.time()?>" />
    <meta property="og:image:secure_url" content="<?php echo $image.'?mod='.time()?>">
    <meta property="og:image:type" content="website" />
    <meta
      property="og:image:alt"
      content="CapitaLand kỉ niệm 30 năm hoạt động"
    />
    <meta
      property="og:site_name"
      content="CapitaLand kỉ niệm 30 năm hoạt động"
    />
    <!-- FB  -->
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="landing.octokit.co" />
    <meta
      property="twitter:title"
      content="CapitaLand kỉ niệm 30 năm hoạt động"
    />
    <meta
      property="twitter:description"
      content="<?php echo $desc ?>"
    />
    <meta property="twitter:image" content="<?php echo $image.'?mod='.time()?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CapitaLand kỉ niệm 30 năm hoạt động</title>
        <script>
          var metaUrl = '<?php echo $urllink ?>?s=1';
          if(metaUrl){
              window.location.href = metaUrl;
          }
        </script>
</head>
<body>
</body>
</html>