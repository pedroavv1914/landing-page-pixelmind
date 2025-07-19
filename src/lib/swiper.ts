import { Swiper } from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Registra os módulos globalmente para garantir que estejam disponíveis
// em qualquer lugar da aplicação. Esta é uma abordagem mais robusta.
Swiper.use([Navigation, Pagination, Autoplay]);
