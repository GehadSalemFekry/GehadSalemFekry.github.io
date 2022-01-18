<script>
  import {
    Facebook,
    Linkedin,
    Github,
  } from "svelte-bootstrap-icons";
</script>
<!-- inset-x-0 bottom-0 fixed -->

<footer class="p-6 footer bg-primary text-primary-content">
  <div>
    <p>
      &copy {`${new Date().getFullYear()}`} Copyright - All right reserved by ME 
    </p>
  </div>

  <div class="grid grid-flow-col gap-8 col-end-12">
    <a href="https://www.facebook.com/gehadsalemfekry/">
      <Facebook />
    </a>
    <a href="https://www.linkedin.com/in/gehad-salem/">
      <Linkedin />
    </a>
    <a href="https://github.com/gehadsalemfekry/">
      <Github />
    </a>
  </div>
  
</footer>