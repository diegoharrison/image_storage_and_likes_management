using Microsoft.AspNetCore.Mvc;

namespace ImageStorageAPI.Controllers
{
    [ApiController]
    [Route("api/images")]
    public class ImagesController : ControllerBase
    {
        private readonly List<string> _imageUrls = new List<string>();

        public ImagesController()
        {
            // Inicializa com 10 imagens aleatórias do placeholder
            for (int i = 1; i <= 10; i++)
            {
                _imageUrls.Add($"https://via.placeholder.com/300?text=Image{i}");
            }
        }

        [HttpGet]
        public IActionResult GetAllImages()
        {
            return Ok(_imageUrls);
        }

        [HttpGet("{id}")]
        public IActionResult GetImageById(int id)
        {
            if (id >= 1 && id <= _imageUrls.Count)
            {
                return Ok(_imageUrls[id - 1]);
            }
            else
            {
                return NotFound();
            }
        }
    }
}
