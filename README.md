# ml-pca-perf
Benchmark test for method options of [ml-pca package](https://github.com/mljs/pca)
## Method Benchmark test
covarianceMatrix is the fastest.
| method           |   hz |
|------------------|-----:|
| SVD              | 2733 |
| covarianceMatrix | 5717 |
| NIPALS           |  221 |
## Result (`pca.getExplainedVariance()`)
### SVD
```json
[0.9246187232017269, 0.05306648311706793, 0.01710260980792975, 0.005212183873275375]
```
### covarianceMatrix
```json
[0.9246187232017269, 0.05306648311706785, 0.017102609807929704, 0.005212183873275558]
```
### NIPALS 
```json
[0.9457223216899879, 0.05427767831001216]
```
