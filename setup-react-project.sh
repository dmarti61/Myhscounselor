#!/bin/bash

# Create package.json and install core React dependencies
npm init -y
npm install react react-dom react-scripts

# Create public directory with minimal index.html
mkdir public
cat <<EOF > public/index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My HS Counselor</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>
  <div id="root"></div>
</body>
</html>
EOF

# Confirm structure
echo "✅ React setup complete. Package.json and public/index.html added."
