<!-- SECONDARY TEMPLATE -->

<section class="secondary-template hidden">

<?php include "components/header/html/header.html" ?>

	<!-- SECONDARY - INTRO -->

	<main id="content">

		<?php include "components/intro/html/secondary-intro.html" ?>

		<!-- SECONDARY - BODY -->

		<?php include "components/tabs/html/tabs.html" ?>

		<!-- SECONDARY - PRIMARY LIST -->

		<section class="content primaryContent wrapper">
			<h2>Primary Content</h2>
			<?php include "components/content/html/item-standard.html" ?>
			<?php include "components/content/html/item-flip.html" ?>
			<?php include "components/content/html/item-mobile.html" ?>
			<?php include "components/content/html/item-featured.html" ?>
		</section>

		<section class="content wrapper">
			<div class="contentItem featuredItem blockContent">
				<div class="description">
					<h3>Damien Newman's Squiggle</h3>
					<p>An illustration of the design process and journey from uncertainly to clarity.</p>
					<a href="https://thedesignsquiggle.com" target="_blank">Learn More</a>
				</div>
				<div class="featureImage squiggle">
				</div>
			</div>
		</section>

		<!-- SECONDARY - MORE LISTS -->

		<?php include "components/content/html/secondary.html" ?>
		<?php include "components/content/html/tertiary.html" ?>
		<?php include "components/content/html/basic.html" ?>

	</main>

	<?php include "components/footer/html/footer.html" ?>

</section>
