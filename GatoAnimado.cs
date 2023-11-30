using System;
using System.Threading;

class Program
{
    static void Main()
    {
        ImprimirGato(5);
    }

    static void ImprimirGato(int frames)
    {
        for (int frame = 0; frame < frames; frame++)
        {
            Console.Clear();
            Console.WriteLine(" /\\_/\\ ");
            Console.WriteLine("( o.o )");
            Console.WriteLine(" > ^ < ");
            Thread.Sleep(500);  // Pausa para dar un efecto de animación
        }
    }
}
