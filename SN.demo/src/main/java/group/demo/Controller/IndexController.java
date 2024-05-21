package group.demo.Controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import group.demo.DTO.PostDTO;
import group.demo.DTO.c_AutonomaDTO;
import group.demo.Service.PostService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@RequestMapping("/")
public class IndexController {
    private static final Logger log =
            LoggerFactory.getLogger(IndexController.class);
    @Autowired
    private PostService postService;

    @GetMapping("/")
    public ModelAndView IniciarSesion(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("./index.html");
        return mav;
    }

    @GetMapping("/api/post")
    public List<PostDTO> getAuto(){
        return postService.findAll();
    }

    @PostMapping("/explorar/filtro")
    public String fitradoviajes(@RequestBody String filtro) {
        List<PostDTO> viajededtolist = postService.filtrado(filtro);
        if (viajededtolist.isEmpty()) {
            return "false";
        }
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.enable(SerializationFeature.INDENT_OUTPUT);
        ArrayNode arrayNode = objectMapper.createArrayNode();
        for(PostDTO postDTO : viajededtolist){
            ObjectNode objetoNode = objectMapper.createObjectNode();
            if (postDTO.getId() != 0 ) {
                objetoNode.put("id", postDTO.getId());
                objetoNode.put("ID_USUARIO", postDTO.getId_Usuario());
                objetoNode.put("ID_CALLE", postDTO.getId_Calle());
                objetoNode.put("ID_PROBLEMA",postDTO.getId_problema());
                objetoNode.put("DESCRIPCION", postDTO.getDescripcion());
                objetoNode.put("FOTO", postDTO.getFoto());
                objetoNode.put("NIVEL", postDTO.getNivel());
                objetoNode.put("VISTO", postDTO.getVisto());
                objetoNode.put("SOLUCIONADO", postDTO.getSolucionado());

                arrayNode.add(objetoNode);
            }
        }



        String json = "";
        try {

            json = objectMapper.writeValueAsString(arrayNode);

        }catch (Exception e){
            e.printStackTrace();
        }
        log.info("filtro: "+filtro);
        return json ;
    }


}
