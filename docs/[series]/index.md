## {{ $params.series }}

<h4 v-for="file in $params.files">
 <a :href="file.split('.')[0]">
   {{ file.replace('.js', '') }}
 </a>
</h4>