#include <iostream>
#include <thread>
#include <chrono>

void ImprimirGato(int frames) {
    for (int frame = 0; frame < frames; frame++) {
        system("cls");  // Limpiar la pantalla en sistemas Windows
        std::cout << " /\\_/\\ " << std::endl;
        std::cout << "( o.o )" << std::endl;
        std::cout << " > ^ < " << std::endl;
        std::this_thread::sleep_for(std::chrono::milliseconds(500));  // Pausa para dar un efecto de animación
    }
}

int main() {
    ImprimirGato(5);
    return 0;
}
