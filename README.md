# msorce.github.io-generator

// TODO: pull leetcode data with this graphql query
```javascript
{ matchedUser(username: "YOUR_USERNAME") {
		submitStats: submitStatsGlobal {
			acSubmissionNum {
				difficulty
				count
				submissions
			}
		}
	}
}
```
