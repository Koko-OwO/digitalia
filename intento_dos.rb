def imprimir_gato(frames)
    frames.times do |frame|
      system("clear") || system("cls")  # Limpiar la pantalla en sistemas Unix o Windows
      puts " /\\_/\\ "
      puts "( o.o )"
      puts " > ^ < "
      sleep 0.5  # Pausa para dar un efecto de animación
    end
  end
  
  # Número de frames para la animación
  num_frames = 5
  
  # Llamada a la función para imprimir el gato animado
  imprimir_gato(num_frames)