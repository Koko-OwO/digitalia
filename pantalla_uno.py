import pygame
import sys

# Inicializar Pygame
pygame.init()

# Configuración de la pantalla
width, height = 800, 600
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Cuadrado a Corazón")

# Colores
black = (0, 0, 0)
red = (255, 0, 0)

# Tamaño y posición inicial del cuadrado
square_size = 50
square_x = 50
square_y = height // 2 - square_size // 2

# Velocidad del cuadrado
speed_x = 5
speed_y = 2

# Bucle principal
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    # Mover el cuadrado
    square_x += speed_x
    square_y += speed_y

    # Rebote en los bordes
    if square_x <= 0 or square_x + square_size >= width:
        speed_x = -speed_x
    if square_y <= 0 or square_y + square_size >= height:
        speed_y = -speed_y

    # Limpiar la pantalla
    screen.fill(black)

    # Dibujar el cuadrado
    pygame.draw.rect(screen, red, (square_x, square_y, square_size, square_size))

    # Actualizar la pantalla
    pygame.display.flip()

    # Esperar un breve momento
    pygame.time.delay(30)

    # Transformar en corazón
    if square_x > width // 2:
        pygame.draw.polygon(screen, red, [(square_x, square_y), (square_x + square_size, square_y),
                                          (square_x + square_size // 2, square_y - square_size)])

    # Actualizar la pantalla nuevamente
    pygame.display.flip()