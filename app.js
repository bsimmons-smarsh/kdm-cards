const Chromy = require('chromy')
const path = require('path')
const fs = require('fs')
const randomstring = require('randomstring')

var directory = "shots"


// creats shots directory if is doesn't already exist
if (!fs.existsSync("./" + directory)){
    fs.mkdirSync("./" + directory);
}

// clean out shots directory from previous run
fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(directory, file), err => {
      if (err) throw err;
    });
  }
});


var filename = ''
var selectorName = ''

let chromy = new Chromy({visible:true})
chromy.chain()
	.goto('http://localhost:8000/cards.html')
	.wait(500)
	// .screenshotMultipleSelectors('.card')
	// .screenshotSelector('.card')
	.screenshotMultipleSelectors([".-disorder", ".-fighting-art"],  function(error, image, index, selectors, subIndex) {
		// console.log("index", index)
		// console.log("selectors", selectors)
		// console.log("subIndex", subIndex)
		if(index >= 0 && subIndex >= 0) {
			selectorName = selectors[index].replace(/[\.-]/g, "")
			filename = directory + '/' + selectorName + "_" + randomstring.generate(17) + '.png'
			fs.writeFileSync(filename, image)
		}
	}, {useQuerySelectorAll: true})
	.end()
	.then(_ => chromy.close())
	.catch(e => {
		console.log(e)
		chromy.close()
	})
