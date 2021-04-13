<!doctype html>

<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="author" content="Glenn Sorrentino">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Table - Simple Design System</title>
	<link rel="stylesheet" href="css/style.css">

	<script src="https://code.jquery.com/jquery-latest.min.js"></script>
	<script src="https://glenn-sorrentino.github.io/design-system/builder/js/builder.js"></script>
	<script src="https://glenn-sorrentino.github.io/design-system/js/main.js"></script>
</head>

<body>

		<!-- HEADER -->

		<header>
			<a href="#navigation" class="assistiveText">Skip to Navigation</a>
			<a href="#content" class="assistiveText">Skip to Main Content</a>
			<div class="wrapper">
				<h1 class="logo"><a href="#">Simple Design System</a></h1>
				<nav id="navigation">
					<a class="navButton" href="#">
						<div class="menu"></div>
					</a>
					<ul>
						<li><a href="https://github.com/glenn-sorrentino/design-system/blob/main/components/header/html/header.html" target="_blank">View Component Code</a></li>
						<li><a href="#">Page 2</a></li>
						<li><a href="#">Page 3</a></li>
						<li><a role="button" class="btn primaryBtn" href="https://github.com/glenn-sorrentino/design-system" target="_blank">Contribute</a></li>
					</ul>
				</nav>
				<nav id="navigation" class="staged">
					<a class="navButton closeButton" href="#">
						<div class="close"></div>
					</a>
					<ul>
						<li><a href="https://github.com/glenn-sorrentino/design-system/blob/main/components/header/html/header.html" target="_blank">View Component Code</a></li>
						<li><a href="#">Page 2</a></li>
						<li><a href="#">Page 3</a></li>
						<li><a role="button" class="btn primaryBtn" href="https://github.com/glenn-sorrentino/design-system" target="_blank">Contribute</a></li>
					</ul>
				</nav>
			</div>
		</header>

		<main id="content">

			<?php include "components/table/html/table.html" ?>

		</main>

		<!-- FOOTER -->


</body>

</html>
