const clientResponse = (Email , FirstName ,LastName , PhoneNumber , Message ) => {
	return `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<title>Response Submitted</title>
		<style>
			body {
				background-color: #ffffff;
				font-family: Arial, sans-serif;
				font-size: 16px;
				line-height: 1.4;
				color: #333333;
				margin: 0;
				padding: 0;
			}
	
			.container {
				max-width: 600px;
				margin: 0 auto;
				padding: 20px;
				text-align: center;
			}
	
			.logo {
				max-width: 200px;
				margin-bottom: 20px;
			}
	
			.message {
				font-size: 18px;
				font-weight: bold;
				margin-bottom: 20px;
			}
	
			.body {
				font-size: 16px;
				margin-bottom: 20px;
			}
	
			.cta {
				display: inline-block;
				padding: 10px 20px;
				background-color: #FFD60A;
				color: #000000;
				text-decoration: none;
				border-radius: 5px;
				font-size: 16px;
				font-weight: bold;
				margin-top: 20px;
			}
	
			.support {
				font-size: 14px;
				color: #999999;
				margin-top: 20px;
			}
	
			.highlight {
				font-weight: bold;
			}
		</style>
	
	</head>
	
	<body>
		<div class="container">
			
			<div class="message">Response Submitted</div>
			<div class="body">
				<p>Dear ${FirstName}${LastName},</p>
				
				<h2 class="highlight">${Email}</h2>
				<p>I want to confirm that we have received your inquiry/response regarding ${Message}. Your query has been submitted, and we are currently reviewing it with utmost attention to provide you with a comprehensive and timely response.

				Rest assured, addressing your concerns promptly is our top priority, and we will make every effort to ensure that your expectations are met.
				
				If you have any additional information or concerns you would like to share in the meantime, please feel free to reply to this email, and we will gladly assist you further.
				
				Thank you for your patience and understanding as we work to resolve this matter.</p>
			</div>
			<div class="support">If you have any questions or need assistance, please feel free to reach out to us at <a
					href="mailto:complianceeazy76@gmail.com">complianceeazy76@gmail.com</a>. We are here to help!</div>
		</div>
	</body>
	
	</html>`;
};
module.exports = clientResponse;