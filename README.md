# ml-pca-perf
Benchmark test for method options of [ml-pca package](https://github.com/mljs/pca)
## Method Benchmark test
`covarianceMatrix` is the fastest.  
Tested in RunKit + npm
| method                     |   hz |
|----------------------------|-----:|
| `SVD`                      | 3099 |
| `covarianceMatrix`         | 6405 |
| `NIPALS`                   |  220 |
| `NIPALS, {nCompNIPALS: 4}` |  129 |
## Result (`pca.getExplainedVariance()`)
### `SVD`
```json
[0.9246187232017269, 0.05306648311706793, 0.01710260980792975, 0.005212183873275375]
```
### `covarianceMatrix`
```json
[0.9246187232017269, 0.05306648311706785, 0.017102609807929704, 0.005212183873275558]
```
### `NIPALS`
```json
[0.9457223216899879, 0.05427767831001216]
```
### `NIPALS, {nCompNIPALS: 4}`
```json
[0.9246187232017233, 0.053066483117027, 0.017102609807958833, 0.005212183873290879]
```
## Reference
- [The NIPALS Algorithm](http://www.statistics4u.com/fundstat_eng/dd_nipals_algo.html)
  > The NIPALS Algorithm gives more numerically accurate results when compared with the SVD of the covariance matrix, but is slower to calculate.
