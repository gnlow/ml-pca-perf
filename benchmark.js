const Benchmark = require("benchmark")
const {PCA} = require("ml-pca")
const dataset = require("ml-dataset-iris").getNumbers()

const suite = new Benchmark.Suite
suite.add("SVD", () => {
    const pca = new PCA(dataset, {method: "SVD"})
})
.add("covarianceMatrix", () => {
    const pca = new PCA(dataset, {method: "covarianceMatrix"})
})
.add("NIPALS", () => {
    const pca = new PCA(dataset, {method: "NIPALS"})
})
.add("NIPALS, {nCompNIPALS: 5}", () => {
    const pca = new PCA(dataset, {method: "NIPALS", nCompNIPALS: 5})
})
.on("complete", function(){
    console.log('Fastest is ' + this.filter('fastest').map('name'))
    console.log(this[0].hz, this[1].hz, this[2].hz, this[3].hz)
})
.run()
