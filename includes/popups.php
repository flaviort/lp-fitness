<!-- HIRE ME / STANDARD -->
<div id="hire-standard" class="popup hire-me">
	<div class="box">
		
		<h2 class="title-big">
			Standard Plan
		</h2>

		<p class="text-medium desc">
			Please, fill the form below with your details and I will get back to you as soon as possible.
		</p>

		<!-- FORM -->
		<form action="">

			<div class="input-field">
				<input id="hire-standard-name" type="text" class="validate text-medium" required>
				<label for="hire-standard-name" class="text-medium">Name *</label>
			</div>

			<div class="input-field">
				<input id="hire-standard-email" type="email" class="validate text-medium" required>
				<label for="hire-standard-email" class="text-medium">Email *</label>
			</div>

			<div class="input-field">
				<input id="hire-standard-phone" type="text" class="text-medium">
				<label for="hire-standard-phone" class="text-medium">Phone</label>
			</div>

			<input type="submit" id="hire-standard-submit" style="display: none;">
			<!--label for="hire-standard-submit" class="text-medium pink-button">Submit</label-->
			<a class="text-medium pink-button" href="#popup-success" data-fancybox onclick="$.fancybox.close()">Submit</a>
			
		</form><!-- END FORM -->

	</div><!-- END BOX -->
</div><!-- END HIRE ME / STANDARD -->

<!-- HIRE ME / PREMIUM -->
<div id="hire-premium" class="popup hire-me">
	<div class="box">
		
		<h2 class="title-big">
			Premium Plan
		</h2>

		<p class="text-medium desc">
			Please, fill the form below with your details and I will get back to you as soon as possible.
		</p>

		<!-- FORM -->
		<form action="">

			<div class="input-field">
				<input id="hire-premium-name" type="text" class="validate text-medium" required>
				<label for="hire-premium-name" class="text-medium">Name *</label>
			</div>

			<div class="input-field">
				<input id="hire-premium-email" type="email" class="validate text-medium" required>
				<label for="hire-premium-email" class="text-medium">Email *</label>
			</div>

			<div class="input-field">
				<input id="hire-premium-phone" type="text" class="text-medium">
				<label for="hire-premium-phone" class="text-medium">Phone</label>
			</div>

			<input type="submit" id="hire-premium-submit" style="display: none;">
			<!--label for="hire-premium-submit" class="text-medium pink-button" onclick="$.fancybox.close()">Submit</label-->
			<a class="text-medium pink-button" href="#popup-error" data-fancybox onclick="$.fancybox.close()">Submit</a>
			
		</form><!-- END FORM -->

	</div><!-- END BOX -->
</div><!-- END HIRE ME / PREMIUM -->

<!-- POPUP SUCCESS -->
<div id="popup-success" class="popup form">
	<div class="box">
		
		<h2 class="title-big">
			Success
		</h2>

		<p class="text-medium desc">
			Your message has been successfully sent! <br />
			I'll get back to you shortly.
		</p>
		
		<button class="text-medium pink-button" onclick="$.fancybox.close()">
			Close
		</button>

	</div><!-- END BOX -->
</div><!-- END POPUP SUCCESS -->

<!-- POPUP ERROR -->
<div id="popup-error" class="popup form">
	<div class="box">
		
		<h2 class="title-big">
			Error
		</h2>

		<p class="text-medium desc">
			There was an error trying to send your message. <br />
			Please try again later.
		</p>

		<button class="text-medium pink-button" onclick="$.fancybox.close()">
			Close
		</button>

	</div><!-- END BOX -->
</div><!-- END POPUP ERROR -->