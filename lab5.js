// JavaScript source code
		function max(n1, n2){
			return n1 > n2 ? n1 : n2;
		}
		
		
		function maxOfThree(n1, n2, n3){
			let n = n1 > n2 ? n1 : n2;
			n = n > n3 ? n : n3;
			return n;
		}
		
		function isVowel(c){
			c = c.toUpperCase();
			return c == 'A' || c == 'E' || c == 'O' || c ==='U' || c == 'I';
		}
		
		function sum(arr){
			let s = 0;
			for (i = 0; i < arr.length; i++){
				s += arr[i];
			}
           return s;
        }
        
		function multiply(arr){
			let m = 1;
			for (i = 0; i < arr.length; i++){
				m *= arr[i];
			}
           return m;
        }
        
		function reverse(s){
			let m = '';
			for (i = s.length - 1; i >= 0; i--){
				m += s[i];
			}
           return m;
        }
        
		function findLongestWord(a){
			let m = '';
			for (i = 0; i < a.length; i++){
				if (m.length < a[i].length)
					m = a[i];
			}
           return m;
        }
        
		function filterLongWords(a, j){
			for (i = a.length - 1; i >= 0; i--){
				if (j >= a[i].length)
					a.splice(i, 1);
			}
           return a;
        }
        
		