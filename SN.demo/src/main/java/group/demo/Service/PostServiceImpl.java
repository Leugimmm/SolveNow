package group.demo.Service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import group.demo.DTO.PostDTO;
import group.demo.Entity.PostEntity;
import group.demo.Repository.PostRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService{
    private static final Logger log = LoggerFactory.getLogger(PostServiceImpl.class);
    @Autowired
    private PostRepository postRepository;
    @Override
    public List<PostDTO> findAll() {
        log.info("PostServiceImpl - findAll: Lista de todos los cliente");
        List<PostDTO> listaPostDTO = postRepository.findAll()
                .stream()
                .map(p -> PostDTO.ConvertToDTO(p))
                .collect(Collectors.toList());

        return listaPostDTO;
    }

    @Override
    public PostDTO findById(PostDTO postDTO) {
        log.info("ProbleServiceImpl - findById: Buscar cliente por id: " +
                postDTO.getId());

        Optional<PostEntity> postEntity = postRepository.findById(postDTO.getId());
        if(postEntity.isPresent()) {
            postDTO = PostDTO.ConvertToDTO(postEntity.get());
            return postDTO;
        }else {
            return null;
        }
    }

    @Override
    public void save(PostDTO postDTO) {
        log.info("ClienteServiceImpl - save: Salvamos el cliente: " +
                postDTO.toString());

        PostEntity postEntity = PostDTO.ConvertToEntity(postDTO);
        postRepository.save(postEntity);
    }
    @Override
    public List<PostDTO> filtrado(String respuesta) {
        log.info("buscando por filtro" + respuesta);
        try {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode jsonNode = mapper.readTree(respuesta);
            int idProblemaNode = jsonNode.get("problema").asInt();
            int idNiNode = jsonNode.get("nivel").asInt();
            int  idAuNode = jsonNode.get("au").asInt();
            int idLocaNode = jsonNode.get("loca").asInt();

            List<PostDTO> listaPosDTO = postRepository.filtrado(idProblemaNode,idNiNode,idAuNode,idLocaNode)
                    .stream()
                    .map(p -> PostDTO.ConvertToDTO(p))
                    .collect(Collectors.toList());
            log.info(String.valueOf(listaPosDTO));
            log.info("size: " + listaPosDTO.size());
            return listaPosDTO;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
