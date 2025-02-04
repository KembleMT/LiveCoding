package LiveCoding3;
import java.util.Scanner;

public class main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Pedir datos por consola
        System.out.print("Ingrese el número de mangos: ");
        int mangos = scanner.nextInt();

        System.out.print("Ingrese el número de naranjas: ");
        int naranjas = scanner.nextInt();

        // Crear objeto y llamar al método imprimir
        MangosNaranjas fruta = new MangosNaranjas(mangos, naranjas);
        fruta.imprimir();
        
        scanner.close();
    }
}
