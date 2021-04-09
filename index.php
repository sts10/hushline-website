<!doctype html>

<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="author" content="Glenn Sorrentino">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Builder - Simple Design System</title>
	<link rel="stylesheet" href="css/style.css">

	<script src="https://code.jquery.com/jquery-latest.min.js"></script>
	<script src="builder/js/builder.js"></script>
	<script src="js/main.js"></script>
</head>

<body id="builder">

	<section class="canvas">

		<!-- HEADER -->

		<?php include "components/header/html/header.html" ?>

		<!-- INSTRUCTIONS INTRO -->

		<?php include "components/intro/html/home-intro.html" ?>
		<?php include "components/intro/html/secondary-intro.html" ?>
		<?php include "components/intro/html/article-intro.html" ?>
		<?php include "components/intro/html/book-cover-intro.html" ?>

		<!-- BODY -->

		<?php include "components/tabs/html/tabs.html" ?>
		<?php include "components/statement/html/statement.html" ?>

		<!-- PRIMARY LIST -->

		<section class="list primaryList wrapper">
			<h2>Primary Content</h2>
			<?php include "components/list/html/item-standard.html" ?>
			<?php include "components/list/html/item-flip.html" ?>
			<?php include "components/list/html/item-mobile.html" ?>
			<?php include "components/list/html/item-featured.html" ?>
			<?php include "components/list/html/item-flip.html" ?>
		</section>

		<!-- EXAMPLES -->

		<section class="list centeredList exampleList wrapper">
			<h2>In The Wild</h2>
			<?php include "components/list/html/example-1.html" ?>
			<?php include "components/list/html/example-2.html" ?>
		</section>

		<!-- MORE LISTS -->

		<?php include "components/list/html/secondary.html" ?>
		<?php include "components/list/html/tertiary.html" ?>
		<?php include "components/list/html/basic.html" ?>

		<!-- ABOUT AND CONTACT -->

		<?php include "components/about/html/about.html" ?>
		<?php include "components/contact/html/contact.html" ?>

		<!-- ARTICLE -->

		<?php include "components/article/html/article.html" ?>


		<!-- PAGINATION -->

		<?php include "components/pagination/html/pagination.html" ?>

		<!-- FOOTER -->

		<?php include "components/footer/html/footer.html" ?>

	</section> <!-- END CANVAS -->

	<!-- FILTERS -->

	<aside>

		<?php include "components/filters/html/filters.html" ?>

	</aside>

</body>

</html>
