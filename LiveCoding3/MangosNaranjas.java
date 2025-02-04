package LiveCoding3;

public class MangosNaranjas {
    private int mangos;
    private int naranjas;
    
    // Constructor
    public MangosNaranjas(int mangos, int naranjas) {
        this.mangos = mangos;
        this.naranjas = naranjas;
    }
    
    // Método para calcular el Máximo Común Divisor (MCD)
    private int calcularMCD(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    // Método para imprimir los resultados
    public void imprimir() {
        int numCajas = calcularMCD(mangos, naranjas);  // Máximo número de cajas
        int mangosPorCaja = mangos / numCajas;
        int naranjasPorCaja = naranjas / numCajas;
        
        System.out.println("El número de cajas es: " + numCajas);
        System.out.println("El número de mangos en una caja es: " + mangosPorCaja);
        System.out.println("El número de naranjas en una caja es: " + naranjasPorCaja);
    }
}