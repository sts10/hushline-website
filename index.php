<!doctype html>

<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="author" content="Glenn Sorrentino">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>🛠 Builder - Simple Design System</title>
	<link rel="stylesheet" href="https://glenn-sorrentino.github.io/design-system/css/style.css">

	<script src="https://code.jquery.com/jquery-latest.min.js"></script>
	<script src="https://glenn-sorrentino.github.io/design-system/builder/js/builder.js"></script>
	<script src="https://glenn-sorrentino.github.io/design-system/js/main.js"></script>
</head>

<body id="builder">

	<section class="canvas">

		<!-- NOTIFICATIONS -->

		<?php include "components/notification/html/notification.html" ?>

		<!-- HEADER -->

		<?php include "components/header/html/header.html" ?>

		<!-- INTRO -->

		<main id="content">

			<?php include "components/intro/html/instructions-intro.html" ?>
			<?php include "components/intro/html/home-intro.html" ?>
			<?php include "components/intro/html/secondary-intro.html" ?>
			<?php include "components/intro/html/article-intro.html" ?>
			<?php include "components/intro/html/book-cover-intro.html" ?>

			<!-- BODY -->

			<?php include "components/tabs/html/tabs.html" ?>

			<!-- MISSION STATEMENT -->

			<?php include "components/statement/html/statement.html" ?>

			<!-- DESIGN RESOURCES -->

			<?php include "components/content/html/figma.html" ?>

			<!-- PRIMARY LIST -->

			<section class="content primaryContent wrapper">
				<h2>Primary Content</h2>
				<?php include "components/content/html/item-standard.html" ?>
				<?php include "components/content/html/item-flip.html" ?>
				<?php include "components/content/html/item-mobile.html" ?>
				<?php include "components/content/html/item-featured.html" ?>
			</section>



			<!-- EXAMPLES -->

			<?php include "components/content/html/example.html" ?>

			<!-- MORE LISTS -->

			<?php include "components/content/html/secondary.html" ?>
			<?php include "components/content/html/tertiary.html" ?>
			<?php include "components/content/html/basic.html" ?>

			<!-- ABOUT AND CONTACT -->

			<?php include "components/about/html/about.html" ?>
			<?php include "components/contact/html/contact.html" ?>

			<!-- ARTICLE -->

			<?php include "components/article/html/article.html" ?>


			<!-- PAGINATION -->

			<?php include "components/pagination/html/pagination.html" ?>

		</main>

		<!-- FOOTER -->

		<?php include "components/footer/html/footer.html" ?>

	</section> <!-- END CANVAS -->

	<!-- FILTERS -->

	<aside>

		<?php include "components/filters/html/filters.html" ?>

	</aside>

</body>

</html>
