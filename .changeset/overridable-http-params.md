---
"@impulse-ui-native/endpoint": major
---

Add protected params and pathParams methods with default serializers that subclasses can override. HttpClient now includes serialized query parameters in the URL and removes both parameter objects before calling send. Transport adapters must use the completed URL rather than expecting raw query parameters or serializing them again.

Move query serialization into HttpClient.params and remove the standalone ParamsSerializer export. Override the protected method to customize query serialization.
