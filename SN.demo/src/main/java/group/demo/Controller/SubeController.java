package group.demo.Controller;

import group.demo.DTO.*;
import group.demo.Service.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
public class SubeController {
    private static final Logger log =
            LoggerFactory.getLogger(SubeController.class);
    @Autowired
    private c_AutonomaService cAutonomaService;

    @Autowired
    private LocalidadService localidadService;
    @Autowired
    private ProblemasService problemasService;
    @Autowired
    private CallesService callesService;
    @Autowired
    private PostService postService;

    @GetMapping("/sube")
    public ModelAndView IniciarSesion(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("./sube-algo.html");
        return mav;
    }

    @GetMapping("/api/auto")
    public List<c_AutonomaDTO> getAuto(){
        return cAutonomaService.findAll();
    }
    @GetMapping("/api/loca")
    public List<LocalidadDTO> getLoca(){
        return localidadService.findAll();
    }
    @GetMapping("/api/calle")
    public List<CallesDTO> getCalle(){
        return callesService.findAll();
    }
    @GetMapping("/api/problema")
    public List<ProblemasDTO> getPro(){
        return problemasService.findAll();
    }

    @PostMapping("/api/sube")
    public boolean comprobarUsuario (@RequestBody PostDTO postDTO){
        log.info(String.valueOf(postDTO));
        postDTO.setId_Usuario(null);
        if(postDTO.getId_problema()==1){
            postDTO.setNivel(3);
        } else if (postDTO.getId_problema()==2) {
            postDTO.setNivel(2);
        } else if (postDTO.getId_problema()==3) {
            postDTO.setNivel(2);
        } else if (postDTO.getId_problema()==4) {
            postDTO.setNivel(1);
        }
        postService.save(postDTO);

        return true;
    }
    private static String UPLOAD_DIR = "src/main/resources/static/imagenes/";

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOAD_DIR + file.getOriginalFilename());

            // Crear el directorio si no existe
            Files.createDirectories(path.getParent());

            Files.write(path, bytes);
            return ResponseEntity.ok("File uploaded successfully!");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Failed to upload file!");
        }
    }

    @GetMapping("/imagenes/{filename:.+}")
    public ResponseEntity<Resource> serveFile(@PathVariable String filename) {
        try {
            Path path = Paths.get(UPLOAD_DIR).resolve(filename);
            Resource resource = new UrlResource(path.toUri());
            if (resource.exists() || resource.isReadable()) {
                return ResponseEntity.ok().body(resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }
}
